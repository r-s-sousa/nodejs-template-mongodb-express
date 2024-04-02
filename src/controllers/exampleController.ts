import { Request, Response, NextFunction } from 'express';
import productCheckoutDAL from '../dal/productCheckoutDAL';
import circleSectionDAL from '../dal/circleSectionDAL';
import customerDAL from '../dal/customerDAL';
import customerPaymentDAL from '../dal/customerPaymentDAL';
import customerPaymentProcessInCircleDAL from '../dal/customerPaymentProcessInCircleDAL';
import paymentLogDAL from '../dal/paymentLogDAL';
import processInCircleBySectionDAL from '../dal/processInCircleBySectionDAL';

export const createExample = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(201).end();
    } catch (error) {
        next(error);
    }
};
export const getAllExamples = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let products = await productCheckoutDAL.find({});
        products = await circleSectionDAL.find({});
        products = await customerDAL.find({});
        products = await customerPaymentDAL.find({});
        products = await customerPaymentProcessInCircleDAL.find({});
        products = await paymentLogDAL.find({});
        products = await processInCircleBySectionDAL.find({});
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

export const getExampleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).end();
    } catch (error) {
        next(error);
    }
};

export const updateExampleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).end();
    } catch (error) {
        next(error);
    }
};

export const deleteExampleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(201).end();
    } catch (error) {
        next(error);
    }
};
