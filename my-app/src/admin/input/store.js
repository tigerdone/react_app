import {
    observable,
    action,
    computed,
    decorate
} from 'mobx'

class Store {
    id = Math.random()
    title = "";
    item = "";
    video = "";
    paper = "";
}
decorate(Store, {
    title: observable,
    item: observable,
    video: observable,
    paper: observable,
})

export default new Store();
