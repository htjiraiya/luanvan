import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import Select, { SingleValue } from 'react-select';
import "./add-transaction-framer.scss";
import transactionService from '../../../../../../APIs/transaction.service';

interface SelectOption {
    value: number,
    label: string
}

const AddTransactionFramer = () => {

    //-------------------state-------------------//
    const [buyer, setBuyer] = useState((): number | null => null);
    const [product, setProduct] = useState((): number | null => null);
    const [dateTransaction, setDateTransaction] = useState('');
    const [imageTransaction, setImageTransaction] = useState((): File | null => null);
    const [imageReviewTag, setImageReviewTag] = useState((): JSX.Element | null => null);

    const [validBuyer, setValidBuyer] = useState(true);
    const [validProduct, setValidProduct] = useState(true);
    const [validDateTransaction, setValidDateTransaction] = useState(true);
    const [validImageTransaction, setValidImageTransaction] = useState(true);

    const [buyerOptions, setBuyerOptions] = useState((): SelectOption[] => [])

    const [productOptions, setProductOption] = useState((): SelectOption[] => [])

    //-----------------lifecycle----------------//
    useEffect(() => {
        (async function() {
            //get data for buyer options
            //get data for input select
            const userId = 2
            //get buyers has contract with htx
            const responseDataBuyers = await transactionService.getBuyersByFramerId(userId);
            //get products of user, product yet has transaction
            const listBuyerOptions = responseDataBuyers.map((element:{buyerId: number, fullNameBuyer: string}) => {
                return { value: element.buyerId, label: element.fullNameBuyer }
            })
            setBuyerOptions(listBuyerOptions)

            //get data for product options
            //get buyers has contract with htx
            const responseDataProducts = await transactionService.getProductYetTransactionByFramerId(userId);
            //get products of user, product yet has transaction
            const listProductsOptions = responseDataProducts.map((element:{productId: number, productName: string}) => {
                return { value: element.productId, label: element.productName }
            })
            setProductOption(listProductsOptions)
        })()
    }, [])

    //-------------------handle-----------------//

    //handle input change
    const handleChangeBuyer = (newValue: SingleValue<SelectOption>) => {
        const valueSelect = newValue as SelectOption;

        //validate
        validateBuyer(valueSelect.value);

        setBuyer(valueSelect.value);
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
        console.log('ohhh noo')
        if (!validBuyer || !validDateTransaction || !validImageTransaction
            || !validProduct) return;

        console.log('ohhh noo')

        const cooperateId = (new Date()).getTime()
        const formData = new FormData()
        formData.append('productId', `${product}`)
        formData.append('buyerId', `${buyer}`)
        formData.append('cooperateDate', dateTransaction)
        formData.append('transactionNumber', `${cooperateId}`)
        formData.append('image', imageTransaction as File, imageTransaction?.name as string)

        transactionService.addTransaction(formData)
    }

    //validate
    const validateBuyer = (value: number | null) => {
        //require
        if (value != null) {
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
                    <Select
                        styles={customStyles}
                        onChange={handleChangeBuyer}
                        options={buyerOptions}
                        placeholder={'chọn thương lái'}
                    />
                    {!validBuyer ?
                        <div className='invalid-feedback show-text-error'>
                            Xin hãy chọn thương lái
                        </div> : ''}
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
                        <div className='invalid-feedback show-text-error'>
                            Xin hãy chọn lô hàng
                        </div> : ''}
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