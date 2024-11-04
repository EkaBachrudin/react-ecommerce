import type { DigitalHubRepositoryInterface } from "domain/interfaces/digHubInterface";
import type { CategoryModel } from "domain/models/category";
import type { HeroBannerModel } from "domain/models/heroBanner";
import { ReactComponent as MoveIcon } from '../../../../assets/icons/move.svg';
import { ReactComponent as ChatIcon } from '../../../../assets/icons/chat.svg';
import { ReactComponent as GamesIcon } from '../../../../assets/icons/games.svg';
import { ReactComponent as MusicIcon } from '../../../../assets/icons/music.svg';
import type { ManageServiceModel } from "domain/models/Manageservice";
import type { ProductListModel } from "domain/models/productList";

const heroBannerData: HeroBannerModel = {
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

const categoryData: CategoryModel[] = [
    {icon: MoveIcon, name: 'Nonton'},
    {icon: ChatIcon, name: 'Sosmed'},
    {icon: GamesIcon, name: 'Games'},
    {icon: MusicIcon, name: 'Musik'},
    {icon: MoveIcon, name: 'Nonton'},
    {icon: ChatIcon, name: 'Sosmed'},
    {icon: GamesIcon, name: 'Games'},
    {icon: MusicIcon, name: 'Musik'}
]

const manageServiceData: ManageServiceModel = {
    title: 'Kelola Layanan Digital',
    top: [
        {icon: ChatIcon, name: 'Aktifkan Paket'},
        {icon: GamesIcon, name: 'Pusat Bantuan'},
    ],
    serviceItems: {
        title: 'Jelajahi Layanan',
        urlSeeAll: '/doc',
        items: [
            {
                imageUrl: 'https://picsum.photos/1920/1089',
                title: 'Kuncie',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1081',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1082',
                title: 'Kuncie',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1083',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1086',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
        ]
    }
}

const productDetailData: ProductListModel = {
    title: 'Pilihan Telkomsel',
    seeAllUrl: '/doc',
    desc: 'Produk-produk unggulan Telkomsel yang cocok untuk Anda',
    productList: [
        {
            imageUrl: 'https://picsum.photos/1280/720',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/721',
            title: 'Kembangkan karir dengan belajar standar internasional',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/722',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/723',
            title: 'Kembangkan karir dengan belajar standar internasional',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/724',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
    ]
}

export class HeroBannerMock implements DigitalHubRepositoryInterface {
    async getCategory(): Promise<CategoryModel[]> {
        return categoryData;
    }
    async getHeroBanner(): Promise<HeroBannerModel> {
        return heroBannerData;
    }
    async getManageService(): Promise<ManageServiceModel> {
        return manageServiceData;
    }
    async getProductList(): Promise<ProductListModel> {
        return productDetailData;
    }
}