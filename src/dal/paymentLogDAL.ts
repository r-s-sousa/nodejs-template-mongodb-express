import { Schema, Document, model } from 'mongoose';

interface ErrorLog extends Document {
    message: string;
    stack: string;
    name: string;
    data: string;
    created_at?: Date;
}

const errorLogSchema = new Schema<ErrorLog>(
    {
        message: { type: String, required: true },
        stack: { type: String, required: true },
        name: { type: String, required: true },
        data: { type: String, required: true },
        created_at: { type: Date, default: null }
    },
    {
        collection: 'error_log'
    }
);

const paymentLogDAL = model<ErrorLog>('error_log', errorLogSchema);
export default paymentLogDAL;