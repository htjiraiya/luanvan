import React, { ChangeEvent, useState } from 'react';
import { FormGroup, Input, Label, Progress } from 'reactstrap';
import "./add-transaction-framer.scss";

const AddTransactionFramer = () => {

    //-------------------state-------------------//
    const [imageTransaction, setImageTransaction] = useState(():File | null => null);
    const [imageReviewTag, setImageReviewTag] = useState(():JSX.Element | null => null);

    //-------------------handle-----------------//
    const handleChangeImageTransaction = (event: ChangeEvent) => {
        const targetEvent = event.target as HTMLInputElement
        if (targetEvent.files) {
            const fileReader = new FileReader();

            fileReader.onload = (e: ProgressEvent) => {
                const src = ((e.target) as FileReader).result;
                setImageReviewTag(<img src={`${src}`}/>);
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
                    <Label for="buyer">
                        Thương lái
                    </Label>
                    <Input
                        id="buyer"
                        name="buyer"
                        placeholder="Thương lái"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">
                        Số lượng
                    </Label>
                    <Input
                        id="quantity"
                        name="quantity"
                        placeholder="Số lượng"
                        type="text"
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

export default AddTransactionFramer;