import { Schema, Document, model } from 'mongoose';

interface CircleSection extends Document {
    product_checkout_id: Schema.Types.ObjectId;
    expire_in_days: number;
    circle_id: number;
    type: 'space' | 'space_group';
}

const circleSectionSchema = new Schema<CircleSection>(
    {
        product_checkout_id: { type: Schema.Types.ObjectId, required: true },
        expire_in_days: { type: Number, required: true },
        circle_id: { type: Number, required: true },
        type: { type: String, enum: ['space', 'space_group'], required: true }
    },
    {
        collection: 'circle_section'
    }
);

const circleSectionDAL = model<CircleSection>('circle_section', circleSectionSchema);
export default circleSectionDAL;