import type { DigitalHubRepositoryInterface } from "domain/interfaces/digHubInterface";
import type { HeroBannerModel } from "domain/models/heroBanner";

export class HeroBannerApi implements DigitalHubRepositoryInterface {
    async getHeroBanner(): Promise<HeroBannerModel> {
        const response = await fetch('https://api.example.com/menu');
        
        if (!response.ok) {
            throw new Error("Failed to fetch menu items");
        }

        const data = await response.json();
        return data;
    }
}