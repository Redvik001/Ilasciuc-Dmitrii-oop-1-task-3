/// <reference types="express" />


declare namespace Express {
    interface Request {
        /**
         * Fix! Объект текущего пользователя.
         */
        user?: import("../../models/clientUser").ClientUser;
    }
}