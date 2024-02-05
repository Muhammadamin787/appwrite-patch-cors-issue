export const DB = Object.freeze({
    id: String(process.env.DB_ID),
    collections: {
        TASKS_ID: String(process.env.TASKS_ID)
    }
});