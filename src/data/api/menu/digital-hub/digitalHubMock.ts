import type { DigitalHubRepositoryInterface } from "domain/interfaces/digHubInterface";
import type { HeroBannerModel } from "domain/models/heroBanner";

const response: HeroBannerModel = {
    title: 'Telkomsel Digital Hub',
    desc: 'Beli, atur dan nikmati beragam produk langganan di Telkomsel',
    items: [
        {
            title: 'Netflix',
            desc: 'Jangan lewatkan Dian Sastro di serial Gadis Kretek, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1920/1080',
            pageUrl: '/doc'
        },
        {
            title: 'Google Play Pass',
            desc: 'Push rank makin gampang, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1280/720',
            pageUrl: '/doc'
        },
        {
            title: 'Netflix',
            desc: 'Jangan lewatkan Dian Sastro di serial Gadis Kretek, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1920/1081',
            pageUrl: '/doc'
        },
        {
            title: 'Google Play Pass',
            desc: 'Push rank makin gampang, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1280/721',
            pageUrl: '/doc'
        }
    ]
}

export class HeroBannerMock implements DigitalHubRepositoryInterface {
    async getHeroBanner(): Promise<HeroBannerModel> {
        return response;
    }
}