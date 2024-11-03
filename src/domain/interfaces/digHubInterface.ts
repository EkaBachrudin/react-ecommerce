import type { CategoryModel } from "domain/models/category";
import type { HeroBannerModel } from "domain/models/heroBanner";

export interface DigitalHubRepositoryInterface {
    getHeroBanner(): Promise<HeroBannerModel>;
    getCategory(): Promise<CategoryModel[]>;
}