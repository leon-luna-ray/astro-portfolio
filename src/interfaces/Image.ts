interface ImageAsset {
    _ref: string;
    _type: string;
}

interface Image {
    _type: string;
    _key: string;
    asset: ImageAsset;
}

export default Image;