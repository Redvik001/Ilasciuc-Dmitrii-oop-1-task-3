import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { UrlService } from 'src/services/url.service';

@Component({
    selector: 'app-tamagotchi-list',
    templateUrl: './tamagotchi-list.component.html',
    styleUrls: ['./tamagotchi-list.component.scss']
})
export class TamagotchiListComponent implements OnInit, OnDestroy {



    newTamagotchiData = {
        name: "Новый питомец",
        type: "dog"
    } as {
        name: string;
        type: TamagotchiType;
    };

    private mainTimer;
    selectedTamagotchiAge: string;
    selectedTamagotchiNextFeedingTime: string;
    selectedTamagotchiNextWalkingTime: string;

    selectedTamagotchi: Dog | Cat | Cobblestone | Parrot;

    tamagotchiesList: Array<Dog | Cat | Cobblestone | Parrot> = [];

    addTamagotchiDialogShowFlag = false;

    constructor(
        public authS: AuthService,
        private http: HttpClient,
        private urlS: UrlService
    ) { }

    ngOnInit() {
        this.http.get(this.urlS.user.getUserTamagotchies).subscribe((data: TamagotchiData[]) => {
            for (let dataItem of data) {
                this.addTamagotchiDataToList(dataItem);
            }
            this.selectedTamagotchi = this.tamagotchiesList[0];
            this.updateTimers();
        });
        this.updateTimers();
        this.mainTimer = setInterval(() => {
            this.updateTimers();
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.mainTimer);
    }

    addTamagotchiDataToList(dataItem: TamagotchiData) {
        if (dataItem.type === "cat") this.tamagotchiesList.push(new Cat(dataItem));
        if (dataItem.type === "dog") this.tamagotchiesList.push(new Dog(dataItem));
        if (dataItem.type === "parrot") this.tamagotchiesList.push(new Parrot(dataItem));
        if (dataItem.type === "сobblestone") this.tamagotchiesList.push(new Cobblestone(dataItem));
    }


    createTamagotchi() {
        this.http.post(this.urlS.user.createTamagotchi, {
            name: this.newTamagotchiData.name,
            type: this.newTamagotchiData.type
        }).subscribe((data: TamagotchiData) => {
            this.addTamagotchiDialogShowFlag = false;
            this.addTamagotchiDataToList(data);
        });
    }

    deleteTamagotchi() {
        const _id = this.selectedTamagotchi._id;
        this.http.delete(this.urlS.user.deleteTamagotchi, { params: { _id } }).subscribe(() => {
            this.tamagotchiesList = this.tamagotchiesList.filter((item) => item._id !== _id);
        });
    }

    changeLastWalkingDate() {
        const tamagotchi = this.selectedTamagotchi as Dog | Cat;
        this.http.put(this.urlS.user.changeLastWalkingDate, { _id: tamagotchi._id }).subscribe((lastWalkingDate: number) => {
            tamagotchi.walk(lastWalkingDate);
        });
    }

    changeLastFeedingDate() {
        const tamagotchi = this.selectedTamagotchi as Dog | Cat | Parrot;
        this.http.put(this.urlS.user.changeLastFeedingDate, { _id: tamagotchi._id }).subscribe((lastFeedingDate: number) => {
            tamagotchi.feed(lastFeedingDate);
        });
    }

    getImgSrc() {
        if (this.selectedTamagotchi.type === "cat") return "assets/images/cat.svg";
        else if (this.selectedTamagotchi.type === "dog") return "assets/images/dog.svg";
        else if (this.selectedTamagotchi.type === "parrot") return "assets/images/parrot.svg";
        else if (this.selectedTamagotchi.type === "сobblestone") return "assets/images/сobblestone.svg";
    }

    updateTimers() {
        if (!this.selectedTamagotchi) return;
        let delta = (+new Date - this.selectedTamagotchi.createDate);
        this.selectedTamagotchiAge = this.timedeltaToString(delta);

        if (this.selectedTamagotchi.type === "cat" || this.selectedTamagotchi.type === "dog" || this.selectedTamagotchi.type === "parrot") {
            delta = (this.selectedTamagotchi.lastFeedingDate + this.selectedTamagotchi.feedingMinInterval * 60000) - +new Date;
            if (delta <= 0) this.selectedTamagotchi.isDeath = true;
            this.selectedTamagotchiNextFeedingTime = this.timedeltaToString(delta);
        }

        if (this.selectedTamagotchi.type === "cat" || this.selectedTamagotchi.type === "dog") {
            delta = (this.selectedTamagotchi.lastWalkingDate + this.selectedTamagotchi.walkingMinInterval * 60000) - +new Date;
            if (delta <= 0) this.selectedTamagotchi.isDeath = true;
            this.selectedTamagotchiNextWalkingTime = this.timedeltaToString(delta);
        }
    }

    timedeltaToString(delta: number) {
        let resp = "";
        const days = Math.floor(delta / 86400000);
        if (days > 0) resp += days + "дней ";
        const hours = Math.floor(delta % 86400000 / 3600000);
        if (hours > 0) resp += hours + "часов ";
        const minutes = Math.floor(delta % 3600000 / 60000);
        if (minutes > 0) resp += minutes + "минут ";
        const seconds = Math.floor(delta % 60000 / 1000);
        if (seconds > 0) resp += seconds + "секунд ";
        if (!resp) resp = "0 секунд";
        return resp;
    }
}


type TamagotchiType = "dog" | "cat" | "сobblestone" | "parrot";

abstract class Tamagotchi {
    _id: string;
    name: string;
    type: TamagotchiType;
    createDate: number;
    isDeath: boolean;

    constructor(data: TamagotchiData) {
        this._id = data._id;
        this.name = data.name;
        this.type = data.type;
        this.createDate = data.createDate;
        this.isDeath = data.isDeath;
    }
}

class TamagotchiData extends Tamagotchi {
    lastWalkingDate?: number;
    lastFeedingDate?: number;
}

class Dog extends Tamagotchi implements Walk, Feeding {
    readonly type: "dog";
    private _lastWalkingDate: number;
    private _lastFeedingDate: number;
    readonly walkingMinInterval = 6;
    readonly feedingMinInterval = 4;

    get lastWalkingDate() {
        return this._lastWalkingDate;
    }

    get lastFeedingDate() {
        return this._lastFeedingDate;
    }


    constructor(data: TamagotchiData) {
        super(data);
        this.walk(data.lastWalkingDate);
        this.feed(data.lastFeedingDate);
    }

    walk(value: number) {
        if (value <= +new Date) this._lastWalkingDate = value;
    };
    feed(value: number) {
        if (value <= +new Date) this._lastFeedingDate = value;
    };
}

class Cat extends Tamagotchi implements Walk, Feeding {
    readonly type: "cat";
    private _lastWalkingDate: number;
    private _lastFeedingDate: number;
    readonly walkingMinInterval = 3;
    readonly feedingMinInterval = 5;

    get lastWalkingDate() {
        return this._lastWalkingDate;
    }

    get lastFeedingDate() {
        return this._lastFeedingDate;
    }

    constructor(data: TamagotchiData) {
        super(data);
        this.walk(data.lastWalkingDate);
        this.feed(data.lastFeedingDate);
    }

    walk(value: number) {
        if (value <= +new Date) this._lastWalkingDate = value;
    };
    feed(value: number) {
        if (value <= +new Date) this._lastFeedingDate = value;
    };
}

class Cobblestone extends TamagotchiData {
    readonly type: "сobblestone";
    selected = false;
}

class Parrot extends Tamagotchi implements Feeding {
    readonly type: "parrot";
    private _lastFeedingDate: number;
    readonly feedingMinInterval = 3;

    get lastFeedingDate() {
        return this._lastFeedingDate;
    }

    constructor(data: TamagotchiData) {
        super(data);
        this.feed(data.lastFeedingDate);
    }

    feed(value: number) {
        if (value <= +new Date) this._lastFeedingDate = value;
    };
}

interface Walk {
    lastWalkingDate: number;
    readonly walkingMinInterval: number;
    walk(value: number);
}

interface Feeding {
    lastFeedingDate: number;
    readonly feedingMinInterval: number;
    feed(value: number);
}