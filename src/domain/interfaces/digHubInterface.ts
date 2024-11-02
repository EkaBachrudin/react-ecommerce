import type { HeroBannerModel } from "domain/models/heroBanner";

export interface DigitalHubRepositoryInterface {
    getHeroBanner(): Promise<HeroBannerModel>
}