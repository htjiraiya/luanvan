import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import Select, { SingleValue } from 'react-select';
import "./add-transaction-framer.scss";
import { borderColor } from '@mui/system';

interface SelectOption {
    value: number,
    label: string
}

const AddTransactionFramer = () => {

    //-------------------state-------------------//
    const [buyer, setBuyer] = useState('');
    const [product, setProduct] = useState((): number | null => null);
    const [dateTransaction, setDateTransaction] = useState('');
    const [imageTransaction, setImageTransaction] = useState((): File | null => null);
    const [imageReviewTag, setImageReviewTag] = useState((): JSX.Element | null => null);

    const [validBuyer, setValidBuyer] = useState(true);
    const [validProduct, setValidProduct] = useState(true);
    const [validDateTransaction, setValidDateTransaction] = useState(true);
    const [validImageTransaction, setValidImageTransaction] = useState(true);

    const productOptions = [
        { value: 1, label: '12345678' },
        { value: 2, label: '12345678' },
        { value: 3, label: '12345678' }
    ];

    //-------------------handle-----------------//

    //handle input change
    const handleChangeBuyer = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        //validate
        validateBuyer(value);

        setBuyer(value);
    }

    const handleChangeProduct = (newValue: SingleValue<SelectOption>) => {
        const valueSelect = newValue as SelectOption;
        //validate
        validateProduct(valueSelect.value);

        setProduct(valueSelect.value);
    }

    const handleChangeDateTransaction = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        //validate
        validateDateTransaction(value);

        setDateTransaction(value);

    }

    const handleChangeImageTransaction = (event: ChangeEvent) => {
        const targetEvent = event.target as HTMLInputElement
        if (targetEvent.files) {
            const fileReader = new FileReader();

            fileReader.onload = (e: ProgressEvent) => {
                const src = ((e.target) as FileReader).result;
                setImageReviewTag(<img src={`${src}`} />);
            }

            fileReader.readAsDataURL(targetEvent.files[0]);
            setImageTransaction(targetEvent.files[0]);

            //validate
            validateImageTransaction(targetEvent.files[0]);
        }
    }

    const handleSubmitTransaction = (event: FormEvent) => {
        event.preventDefault();
        //check validate
        validateBuyer(buyer);
        validateProduct(product);
        validateDateTransaction(dateTransaction);
        validateImageTransaction(imageTransaction);

        if (!validBuyer || !validDateTransaction || !validImageTransaction
            || validProduct) return;
    }

    //validate
    const validateBuyer = (value: string) => {
        console.log(value.length > 0);
        //require
        if (value.length > 0) {
            setValidBuyer(true);
        } else {
            setValidBuyer(false);
        }
    }

    const validateProduct = (value: number | null) => {
        //require
        if (value != null) {
            setValidProduct(true);
        } else {
            setValidProduct(false);
        }
    }

    const validateDateTransaction = (value: string) => {
        //require
        if (value.length > 0) {
            setValidDateTransaction(true);
        } else {
            setValidDateTransaction(false);
        }
    }

    const validateImageTransaction = (value: File | null) => {
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

        setValidImageTransaction(isValid);
    }

    const customStyles = {
        control: (provider: any, state: any) => ({
            ...provider,
            // state.isFocused can display different borderColor if you need it
            borderColor: state.isFocused ?
                '#ddd' : validProduct ?
                    '#ddd' : 'red',
            // overwrittes hover style
            '&:hover': {
                borderColor: state.isFocused ?
                    '#ddd' : validProduct ?
                        '#ddd' : 'red'
            }
        })
    }

    return (
        <div className='add-transaction-wrapper center'>
            <br />
            <h1>Thêm giao dịch</h1>
            <br /><br />
            <form onSubmit={e => handleSubmitTransaction(e)} className='form-add-transaction'>
                <FormGroup>
                    <Label for="buyer">
                        Thương lái
                    </Label>
                    <Input
                        invalid={!validBuyer}
                        onChange={(e) => handleChangeBuyer(e)}
                        id="buyer"
                        name="buyer"
                        placeholder="Thương lái"
                        type="text"
                    />
                    <FormFeedback>
                        Xin hãy nhập trường thương lái
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">
                        Lô hàng
                    </Label>
                    <Select
                        styles={customStyles}
                        onChange={handleChangeProduct}
                        options={productOptions}
                        placeholder={'chọn lô hàng'}
                    />
                    {!validProduct ?
                        <span className='text-danger'>
                            Xin hãy chọn trường thương lái
                        </span> : ''}
                </FormGroup>
                <FormGroup>
                    <Label for="date-transaction">
                        Ngày giao dịch
                    </Label>
                    <Input
                        invalid={!validDateTransaction}
                        onChange={(e) => handleChangeDateTransaction(e)}
                        id="date-transaction"
                        name="date-transaction"
                        placeholder="Ngày giao dịch"
                        type="date"
                    />
                    <FormFeedback>
                        Xin hãy chọn ngày thu hoạch
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="image-transaction">
                        Hình ảnh sản phẩm
                    </Label>
                    <Input
                        invalid={!validImageTransaction}
                        id="image-transaction"
                        name="image-transaction"
                        placeholder="Hình ảnh sản phẩm"
                        type="file"
                        onChange={e => handleChangeImageTransaction(e)}
                    />
                    <FormFeedback>
                        Xin hãy chọn hình ảnh
                    </FormFeedback>
                </FormGroup>

                <div className="image-transaction-review center">
                    {imageReviewTag}
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Thêm giao dịch</button>
            </form>
        </div>
    );
};

export default AddTransactionFramer;