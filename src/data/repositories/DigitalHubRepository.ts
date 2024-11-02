import { HeroBannerApi } from "data/api/menu/digital-hub/digitalHubApi";
import { HeroBannerMock } from "data/api/menu/digital-hub/digitalHubMock";
import type { DigitalHubRepositoryInterface } from "domain/interfaces/digHubInterface";

const USE_MOCK = true;

export const digitalHubRepository: DigitalHubRepositoryInterface = USE_MOCK
    ? new HeroBannerMock() : new HeroBannerApi()