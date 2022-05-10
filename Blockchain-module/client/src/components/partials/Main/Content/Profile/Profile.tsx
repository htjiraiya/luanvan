import React from 'react';
import Select from 'react-select';
import { FormGroup, Input, Label } from 'reactstrap';
import "./Profile.scss";

const Profile = () => {
    const positionOptions = [
        { value: 1, label: 'Trưởng ban hợp tả xã' },
        { value: 1, label: 'Phó ban hợp tả xã' },
        { value: 1, label: 'Xã viên' },
        { value: 1, label: 'Thương lái' },
    ]

    return (
        <div className='main-container center'>
            <br /><br />
            <h2 className='text-center'>Thông tin tài khoản</h2>

            <form action="" className='form-profile'>
                <FormGroup>
                    <Label for="fullName">
                        Họ Và Tên
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Họ Và Tên"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="dateOfBirth">
                        Ngày sinh
                    </Label>
                    <Input
                        id="dateOfBirth"
                        name="date"
                        placeholder="Ngày sinh"
                        type="date"
                    />
                </FormGroup>
                <div className="input-sex">
                    <label>Giới tính: </label>
                    <FormGroup check className='sex-item'>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Nam
                        </Label>
                    </FormGroup>
                    <FormGroup check className='sex-item'>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Nữ
                        </Label>
                    </FormGroup>
                </div>
                <div className="input-position">
                    <label>Vị trí </label>
                    <Select
                        options={positionOptions}
                        placeholder={'Vị trí'}
                    />
                </div>

                <FormGroup>
                    <Label for="address">
                        Địa chỉ
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Địa chỉ"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">
                        Số điện thoại
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Số điện thoại"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                </FormGroup>
            </form>
        </div>
    );
};

export default Profile;