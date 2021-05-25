import React, { Component, Fragment } from 'react'
import TableSinhVien from './TableSinhVien'
import {connect} from 'react-redux'

 class FormQuanLySinhVien extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        }

    }

    handleChangeInput = (event) => {
        //lấy thông tin thẻ dựa vào biến event
        // let value = event.target.value;
        // let name = event.target.name;
        let { value, name } = event.target;
        //lấy ra giá trị this.state.value hiện tại
        let newValue = { ...this.state.values };
        //láy ra giá trị errors hiện tại
        let newErrors = { ...this.state.errors }

        //Thay đổi thuộc tính trong this.state.values
        newValue[name] = value;

        let errorMess = '';



        //xử lý thay đổi errors;
        if (newValue[name].trim() === '') {
            errorMess = name + ' không được bỏ trống !'
        }

        //Lấy thuộc tính mình tự tạo trên thẻ
        let typeEmail = event.target.getAttribute('typeEmail');

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (typeEmail === 'email') {
            //nếu trường đang thay đổi sai định dạng email
            if (newValue[name].trim() === '') {
                errorMess = name + ' không được bỏ trống !'
            }else
            if (!re.test(newValue[name])) {
               errorMess = name + ' không đúng định dạng email!';
            }
        }

        newErrors[name]=errorMess;


        //cập nhật lại this.state.values = newValue (giá trị mới thay đổi khi ng dùng handleChange)
        this.setState({
            values: newValue,
            errors: newErrors
        })
        console.log(newValue);
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault(); //chặn sự kiện reload browser
        console.log(this.state)


        //form hợp lệ khi tất cả value khác rỗng và tất cả lỗi phải = rỗng => submit
        let valid = true;
        let {values,errors} = this.state;
        for (let keyName in values){
            if (values[keyName].trim() ===''){ //values có 1 trường vi phạm => bị bỏ trống
                valid = false;
            }
        }
        for (let keyName in errors){
            if (errors[keyName] !== ''){ //có 1 trường hợp hiển thị lỗi => ko hợp lệ
                valid = false;
            }
        }

        if (!valid){
            alert('dữ liệu không hợp lệ !!');
            return;
        }


        //đưa dữ liệu lên redux sau khi lấy thông tin từ ng dùng
        const action = {
            type : 'THEM_SINH_VIEN',
            sinhVien:this.state.values,
        }
        this.props.dispatch(action)
    }

    render() {
        let {maSinhVien,tenSinhVien,soDienThoai,email} = this.props.sinhVienSua
        
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit}>
                    <div className="card ">
                        <div className="card-header text-white bg-dark">Quản Lý Sinh Viên</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Mã Sinh Vien</p>
                                        <input className="form-control" name="maSinhVien" value={maSinhVien} onChange={this.handleChangeInput
                                            // (event) => {
                                            // //lấy thông tin thẻ dựa vào biến event
                                            // let value = event.target.value;
                                            // this.setState({
                                            //     maSinhVien: value
                                            // }, () => {
                                            //     console.log(this.state)
                                            // })
                                            // }
                                        } />
                                        <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Số Điện Thoại</p>
                                        <input className="form-control" name="soDienThoai" value={soDienThoai} onChange={this.handleChangeInput
                                            //     (event) => {
                                            //     //lấy thông tin thẻ dựa vào biến event
                                            //     let value = event.target.value;
                                            //     this.setState({
                                            //         ['soDienThoai']: value
                                            //     }, () => {
                                            //         console.log(this.state)
                                            //     })
                                            // }
                                        } />
                                        <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Tên Sinh Vien</p>
                                        <input className="form-control" name="tenSinhVien" value={tenSinhVien} onChange={this.handleChangeInput} />
                                        <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input typeEmail="email" className="form-control" value={email} name="email" onChange={this.handleChangeInput} />
                                        <p className="text text-danger">{this.state.errors.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer text-right">
                            <button className="btn btn-success">Thêm Sinh Viên</button>
                        </div>
                    </div>

                </form>

                <TableSinhVien />
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return{
        sinhVienSua:rootReducer.quanLySinhVienReducer.sinhVienSua
    }
}


export default connect (mapStateToProps)(FormQuanLySinhVien)