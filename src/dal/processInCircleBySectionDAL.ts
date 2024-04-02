import { Schema, Document, model } from 'mongoose';

interface CircleProcess extends Document {
    id_circle_section: Schema.Types.ObjectId;
    id_customer_process_in_circle: Schema.Types.ObjectId;
    product_name: string;
    circle_id: string;
    payment_id_checkout: string;
    process_status: string;
    message_of_processing: string;
    created_at?: Date;
}

const circleProcessSchema = new Schema<CircleProcess>(
    {
        id_circle_section: { type: Schema.Types.ObjectId, required: true },
        id_customer_process_in_circle: { type: Schema.Types.ObjectId, required: true },
        product_name: { type: String, required: true },
        circle_id: { type: String, required: true },
        payment_id_checkout: { type: String, required: true },
        process_status: { type: String, required: true },
        message_of_processing: { type: String, required: true },
        created_at: { type: Date, default: null }
    },
    {
        collection: 'process_in_circle_by_section'
    }
);

const processInCircleBySectionDAL = model<CircleProcess>('process_in_circle_by_section', circleProcessSchema);
export default processInCircleBySectionDAL;