declare global {
    interface Window {
        dataLayer: dataLayer[];
    }
}
class DataLayer {
    private dataLayer: dataLayer[];

    constructor() {
        this.dataLayer = (window.dataLayer) ? window.dataLayer : [];
    }

    public push(data: dataLayer) {
        this.dataLayer.push(data);
    }
}
export { DataLayer };
export default new DataLayer();
