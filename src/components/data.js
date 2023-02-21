import { isInteger } from "mathjs";
import { Info } from "../data/db.json";

class Data {
    constructor(info) {
        this.info = info
        this.init()
    }
    init() {
        this._getOperator()
        this._getPureOperator()
        this._getInvisible()
        this._getNumber()
        this._getOrder()
    }
    _getOperator() {
        this.operator = this._getProperty('operator')
        this.operatorID = []
        this.operator.forEach(info => {
            info.tag ? this.operatorID.push(info.id) : null
        });
    }
    _getPureOperator() {
        this.pureOperator = this._getProperty('pureOperator')
        this.pureOperatorTag = []
        this.pureOperatorTag.forEach(info => {
            info.tag ? this.pureOperatorTag.push(info.tag) : null
        })
    }
    _getInvisible() {
        this.invisible = this._getProperty('invisible')

    }
    _getNumber() {
        this.numberList = this._getProperty('number')
    }
    _getOrder() {
        this.orderList = this.info.filter(info => info.order).sort((a, b) => (a.order - b.order))
    }
    _getProperty(property) {
        return this.info.filter(info => info.property.includes(property))
    }
}

const data = new Data(Info)
export { data }