import React, { Component } from 'react'
import TableSV from './TableSV'
import {connect} from 'react-redux'


 class FormQuanLySV extends Component {

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
        //lay thong tin thẻ dựa vào biến event
        let { value, name } = event.target;
        //lấy ra giá trị this.state.value hiện tịa
        let newValues = { ...this.state.values }

        //thay đổi thuộc tính trong this.state.values
        newValues[name] = value;
        // console.log(newValues)

        //lay ra gia ti errors
        let newErrors = { ...this.state.errors }


        let errorMess = '';
        //Xử lý thay đổi error
        if (newValues[name].trim() === "") {
            errorMess = name + ' ko dc bo trong'
        }


        //lay thuộc tính mình tự tạo trên thẻ
        let typeEmail = event.target.getAttribute('typeEmail');
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //nếu typeEmail = email
        if (typeEmail === 'email') {
            //nếu trường đang thay đổi sai định dạng email
            if (!re.test(newValues[name])) {
                errorMess = name + ' ko đúng định dạng'
            }
            // console.log('type email',newValues[name])
        }


        newErrors[name] = errorMess;
        //cập nhật lại this.state.values = newValue (giá trị mới thay đổi khi ng dùng handleChange)
        this.setState({
            values: newValues,
            errors: newErrors
        })
        console.log(this.state)
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)


        //kiểm tra submit hợp lệ
        //form hợp lệ khi tất cả value khác rỗng & error phải = rỗng => submit
        let valid = true;

        let { values, errors } = this.state;
        for (let keyName in values) {
            if (values[keyName].trim() === '') {
                //values co 1 trường hợp vi phạm => bị bỏ trống
                valid = false;
            }
        }

        for (let keyName in errors) {
            if (errors [keyName] !== '') {
                //co 1 truong hiển thị lỗi => k hợp lêj
                valid = false
            }
        }

        if (!valid) {
            alert('dữ liệu ko hợp lệ')

            return;

        }


        //đưa dữ liệu lên redux sau khi lấy thông tin ng dùng
        const action = {
            type:'THEM_SINH_VIEN',
            sinhVien:this.state.values
        }
        this.props.dispatch(action)
    }


    componentWillReceiveProps(newProps){
        //this.props (trước khi thay đổi) newProps( sau khi thay đổi)
        //khi người dùng bấm nút chỉnh sửa thì đem props mới từ redux về và gán cho state
        this.setState({
            values:newProps.sinhVienSua
        })
    }

    render() {
        let {maSinhVien,tenSinhVien,soDienThoai,email} = this.state.values
        console.log('this.props.sinhVienSua',this.props.sinhVienSua)

        return (
            <div className="container" style={{ width: "100%" }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-header bg-dark text-white">Quan Ly Sinh Vien</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Ma Sinh Vien</p>
                                        <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput}  value={maSinhVien}/>
                                        <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>So Dien Thoai</p>
                                        <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput} value={soDienThoai} />
                                        <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Ten Sinh Vien</p>
                                        <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien}/>
                                        <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input className="form-control" typeEmail="email" name="email" onChange={this.handleChangeInput} value={email} />
                                        <p className="text text-danger">{this.state.errors.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer text-right">
                            <button className="btn btn-success">Them Sinh Vien</button>
                        </div>
                    </div>
                </form>

                <TableSV />
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return {
        sinhVienSua: rootReducer.onTapFormQLSVReducer.sinhVienSua
    }
}


export default connect(mapStateToProps)(FormQuanLySV)