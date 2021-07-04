function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamTrongThang, _tongLuong, _loaiNhanVien) {
    //khai báo thuộc tính
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLamTrongThang = _gioLamTrongThang;

    //5.thực thi phương thức tính tổng lương
    this.tinhTongLuong = function(chucVu, luongCoBan) {
        var tongLuong = 0;
        if(chucVu === 'Sếp') {
            tongLuong = parseInt(this.luongCoBan) * 3;
        } else if(chucVu === 'Trưởng phòng') {
            tongLuong = parseInt(this.luongCoBan) * 2;
        } else{
            tongLuong = parseInt(this.luongCoBan);
        };
        return Intl.NumberFormat().format(tongLuong);
    };
    this.tongLuong = this.tinhTongLuong(this.chucVu, this.luongCoBan);

    //6.thực thi phương thức xếp loại nhân viên
    this.xepLoaiNV = function(gioLamTrongThang) {
        var loaiNhanVien = '';
        if(gioLamTrongThang >= 192) {
            loaiNhanVien = "Nhân viên xuất sắc";
        } else if(gioLamTrongThang >= 176 && gioLamTrongThang < 192) {
            loaiNhanVien = "Nhân viên giỏi";
        } else if(gioLamTrongThang >= 160 && gioLamTrongThang < 176) {
            loaiNhanVien = "Nhân viên khá";
        } else if(gioLamTrongThang < 160) {
            loaiNhanVien = "Nhân viên trung bình";
        };
        return loaiNhanVien;
    };
    this.loaiNhanVien = this.xepLoaiNV(this.gioLamTrongThang);

};