import React, { ChangeEvent, useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';

const AddTransactionBuyer = () => {

    //-------------------state-------------------//
    const [imageTransaction, setImageTransaction] = useState((): File | null => null);
    const [imageReviewTag, setImageReviewTag] = useState((): JSX.Element | null => null);


    const productOptions = [
        { value: 1, label: '12345678' },
        { value: 2, label: '12345678' },
        { value: 3, label: '12345678' }
    ];
    //-------------------handle-----------------//
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
        }
    }

    return (
        <div className='add-transaction-wrapper center'>
            <br />
            <h1>Thêm giao dịch</h1>
            <br /><br />
            <form action="#" className='form-add-transaction'>
                <FormGroup>
                    <Label for="customer">
                        Khách hàng
                    </Label>
                    <Input
                        id="customer"
                        name="customer"
                        placeholder="Khách hàng"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">
                        Lô hàng
                    </Label>
                    <Select
                        options={productOptions}
                        placeholder={'chọn lô hàng'}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date-transaction">
                        Ngày giao dịch
                    </Label>
                    <Input
                        id="date-transaction"
                        name="date-transaction"
                        placeholder="Ngày giao dịch"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image-transaction">
                        Hình ảnh sản phẩm
                    </Label>
                    <Input
                        id="image-transaction"
                        name="image-transaction"
                        placeholder="Hình ảnh sản phẩm"
                        type="file"
                        onChange={e => handleChangeImageTransaction(e)}
                    />
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

export default AddTransactionBuyer;