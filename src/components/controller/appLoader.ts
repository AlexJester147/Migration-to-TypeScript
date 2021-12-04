import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'f2c49fb78eca4ed9ae89bc8c527a3d50', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
