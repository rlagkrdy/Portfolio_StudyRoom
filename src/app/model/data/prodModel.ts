import { FormatterUtils } from '../../core/yoService/utils/formatter/formatter.service';
import { CommonCode } from '../../commonCode';
import { ColDef, ColGroupDef } from 'ag-grid';
import { DetailObj } from '../../core/yoComponent/yo-detail/yo-detail.component';
import { SearchObj } from '../../core/yoComponent/yo-search/yo-search.component';

export class ProdModel {
    constructor(private _fu: FormatterUtils) {}
    private prodTitle: string = '상품관리';
    private prodObj: SearchObj[] = [
        {
            id: 'PROD_CATE',
            name: '구분',
            type: 'select',
            data: CommonCode.getCode('prod'),
            value: ''
        },
        {
            id: 'PROD_CREATE',
            name: '등록일시',
            type: 'date',
            value: ''
        },
        {
            id: 'KEYWORD',
            name: '키워드',
            type: 'input',
            value: ''
        }
    ];
    private prodDefs: (ColDef | ColGroupDef)[] = [
        { headerName: '상품명', field: 'PROD_NAME', width: 150 },
        { headerName: '구분', field: 'PROD_CATE_NM', width: 100 },
        {
            headerName: '금액',
            field: 'PROD_PRICE',
            width: 150,
            valueFormatter: this._fu.moneyFommat
        },
        { headerName: '등록일시', field: 'PROD_CREATE_NM', width: 100 }
    ];

    private prodDetailTitle: string = '상품관리 > 상품상세';
    private prodDetailObj: DetailObj[] = [
        {
            name: '삼품명',
            id: 'PROD_NAME',
            type: 'input',
            value: '',
            required: true
        },
        {
            name: '구분',
            id: 'PROD_CATE',
            type: 'select',
            value: '',
            data: CommonCode.getCode('prod'),
            required: true
        },
        {
            name: '금액',
            id: 'PROD_PRICE',
            type: 'input',
            value: '',
            required: true
        },
        {
            name: '상품설명',
            id: 'PROD_INTRO',
            type: 'editor',
            value: ''
            // required: true
        }
    ];
}
