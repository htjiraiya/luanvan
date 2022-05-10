import Select, { SingleValue } from 'react-select';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import './add-product.scss';
import productService from '../../../../../APIs/product.service';

interface SelectOption {
    value: number,
    label: string
}

const AddProduct = () => {
    //-------------------state-------------------//
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [log, setLog] = useState((): number | null => null);
    const [dateHarvest, setDateHarvest] = useState('');
    const [imageProduct, setImageProduct] = useState((): File | null => null);
    const [imageReviewTag, setImageReviewTag] = useState((): JSX.Element | null => null);

    const [validNameProduct, setValidNameProduct] = useState(true);
    const [validPriceProduct, setValidPriceProduct] = useState(true);
    const [validLog, setValidLog] = useState(true);
    const [validDateHarvest, setValidDateHarvest] = useState(true);
    const [validImageProduct, setValidImageProduct] = useState(true);

    const productOptions = [
        { value: 1, label: 'Nhật ký 1' },
        { value: 2, label: 'Nhật ký 2' },
        { value: 3, label: 'Nhật ký 3' }
    ];

    //-------------------handle-----------------//

    //handle input change
    const handleChangeNameProduct = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        //validate
        validateNameProduct(value);
        setNameProduct(value);
    }

    const handleChangePriceProduct = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        //validate
        validatePriceProduct(value);
        setPriceProduct(value);
    }

    const handleChangeLog = (newValue: SingleValue<SelectOption>) => {
        const valueSelect = newValue as SelectOption;

        //validate
        validateLog(valueSelect.value);
        setLog(valueSelect.value);
    }

    const handleChangeDateHarvest = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        //validate
        validateDateHarvest(value);
        setDateHarvest(value);
    }

    const handleChangeImageProduct = (event: ChangeEvent) => {
        const targetEvent = event.target as HTMLInputElement
        if (targetEvent.files) {
            const fileReader = new FileReader();

            fileReader.onload = (e: ProgressEvent) => {
                const src = ((e.target) as FileReader).result;
                setImageReviewTag(<img src={`${src}`} />);
            }

            fileReader.readAsDataURL(targetEvent.files[0]);
            setImageProduct(targetEvent.files[0]);
            validateImageProduct(targetEvent.files[0]);
        }
    }

    const handleSubmitProduct = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        validateNameProduct(nameProduct);
        validatePriceProduct(priceProduct);
        validateLog(log);
        validateDateHarvest(dateHarvest);
        validateImageProduct(imageProduct);

        if (!validNameProduct || !validPriceProduct || !validLog 
            || !validDateHarvest || !validImageProduct) return;
        
        const product  = {
            productName: nameProduct,
            riceId: '',
            riceQuantity: '',
            logId: log,
            farmerId: '',
            harvestDate: dateHarvest,
            image: imageProduct,
            status: 0
        }

        const result = await productService.addProduct(product)
        
    }

    //validate
    const validateNameProduct = (value: string) => {
        //require
        if (value.length > 0) {
            setValidNameProduct(true);
        } else {
            setValidNameProduct(false);
        }
    }

    const validatePriceProduct = (value: string) => {
        let isValid = true;
        //require
        isValid = isValid && ((value.length > 0) ? true : false);

        //is number
        isValid = isValid && !isNaN(parseInt(value));
        setValidPriceProduct(isValid);
    }

    const validateLog = (value: number | null) => {
        //require
        let isValid = ((value != null) ? true : false);
        setValidLog(isValid);
    }

    const validateDateHarvest = (value: string) => {
        //require
        let isValid = ((value.length > 1) ? true : false);
        setValidDateHarvest(isValid);
    }

    const validateImageProduct = (value: File | null) => {
        let isValid = true;
        //require
        isValid = value ? true : false;

        //extension is image
        const type = value?.type.split('/')[1];
        const acceptType = ['png', 'jpeg', 'jpg', 'tiff', 'gif'];
        if (acceptType.includes(type as string)) {
            isValid = isValid && true;
        } else {
            isValid = isValid && false;
        }

        setValidImageProduct(isValid);
    }

    const customStyles = {
        control: (provider: any, state: any) => ({
            ...provider,
            // state.isFocused can display different borderColor if you need it
            borderColor: state.isFocused ?
                '#ddd' : validLog ?
                    '#ddd' : 'red',
            // overwrittes hover style
            '&:hover': {
                borderColor: state.isFocused ?
                    '#ddd' : validLog ?
                        '#ddd' : 'red'
            }
        })
    }

    return (
        <div className='add-product-wrapper center'>
            <br />
            <h1>Thêm lô hàng</h1>
            <br /><br />
            <form onSubmit={e => handleSubmitProduct(e)} className='form-add-product'>
                <FormGroup>
                    <Label for="name-product">
                        Tên lô hàng
                    </Label>
                    <Input
                        onChange={e => handleChangeNameProduct(e)}
                        invalid={!validNameProduct}
                        id="name-product"
                        name="name-product"
                        placeholder="Tên lô hàng"
                        type="text"
                    />
                    <FormFeedback>
                        Xin hãy nhập tên lô hàng
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="name-product">
                        Giá lô hàng
                    </Label>
                    <Input
                        invalid={!validPriceProduct}
                        onChange={e => handleChangePriceProduct(e)}
                        id="name-product"
                        name="name-product"
                        placeholder="Tên lô hàng"
                        type="text"
                    />
                    <FormFeedback>
                        Xin hãy nhập giá lô hàng
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="log">
                        Nhật ký đồng ruộng
                    </Label>
                    <Select
                        id='log'
                        onChange={handleChangeLog}
                        styles={customStyles}
                        options={productOptions}
                        placeholder={'chọn nhật ký đồng ruộng'}
                    />
                    {validLog ? '' :
                        <span className='text-danger'>
                            Xin hãy chọn nhật ký
                        </span>}
                </FormGroup>
                <FormGroup>
                    <Label for="date-harvest">
                        Ngày thu hoạch
                    </Label>
                    <Input
                        onChange={e => handleChangeDateHarvest(e)}
                        invalid={!validDateHarvest}
                        id="date-harvest"
                        name="date-harvest"
                        placeholder="Ngày giao dịch"
                        type="date"
                    />
                    <FormFeedback>
                        Xin hãy chọn ngày thu hoạch
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="image-product">
                        Hình ảnh sản phẩm
                    </Label>
                    <Input
                        invalid={!validImageProduct}
                        id="image-product"
                        name="image-product"
                        placeholder="Hình ảnh sản phẩm"
                        type="file"
                        onChange={e => handleChangeImageProduct(e)}
                    />
                    <FormFeedback>
                        Xin hãy chọn hình ảnh lô hàng
                    </FormFeedback>
                </FormGroup>

                <div className="image-product-review center">
                    {imageReviewTag}
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Thêm giao dịch</button>
            </form>
        </div>
    );
};

export default AddProduct;