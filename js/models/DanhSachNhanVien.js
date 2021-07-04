function DanhSachNhanVien() {
    this.array = [];
    this.themNhanVien = function(nhanVien) {
        this.array.push(nhanVien);
    };
        
};

DanhSachNhanVien.prototype.timViTri = function(taiKhoanNV) {
    var _index = this.array.findIndex(function(item) {
        return taiKhoanNV === item.taiKhoan;
    })
    return _index;
};

DanhSachNhanVien.prototype.xoaNhanVien = function(taiKhoanNV) {
    var viTri = this.timViTri(taiKhoanNV);
    if(viTri !== -1) {
        this.array.splice(viTri, 1);
    };
};

DanhSachNhanVien.prototype.capNhatNhanVien = function(taiKhoanNV) {
    var viTri = this.timViTri(taiKhoanNV);
    if(viTri !== -1) {
        return this.array[viTri];
        
    };
    
};



