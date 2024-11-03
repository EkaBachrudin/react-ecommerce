import type { CategoryModel } from "domain/models/category";
import type { HeroBannerModel } from "domain/models/heroBanner";
import type { ManageServiceModel } from "domain/models/Manageservice";

export interface DigitalHubRepositoryInterface {
    getHeroBanner(): Promise<HeroBannerModel>;
    getCategory(): Promise<CategoryModel[]>;
    getManageService(): Promise<ManageServiceModel>
}