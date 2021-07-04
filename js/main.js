/**
 * khởi tạo dsnv thừ lớp đối tượng danhSachNhanVien
 */
var dsnv = new DanhSachNhanVien();

//9.Tìm Nhân Viên theo loại (xuất săc, giỏi, khá...) và hiển thị
var search = function(array, value) {
    var result = [];
    array.map(function(nv, index) {
        if(nv.loaiNhanVien === value) {
            result.push(nv);
        }
    })
    return result;
};

getEle('btnTimNV').addEventListener('click', function() {
    var searchValue = getEle('searchName').value;
    var result = search(dsnv.array, searchValue);
    hienThiDanhSachNV(result);
    
});

/**
 * 4.Validation
 */
var validator = new Validator();

function getEle(id) {
    return document.getElementById(id);
};

getEle('btnThem').addEventListener('click', function() {
    //làm ẩn nút cập nhật
    btnThemNV.style.display = 'block';
    btnCapNhat.style.display = 'block';
    btnCapNhat.style.display = 'none';
    if (btnThemNV.style.display == "none") {
        btnThemNV.style.display = "block";
    };
});


/**
 * 1. In ra table danh sách nhân viên
 */

var hienThiDanhSachNV = function(array) {
    
    var content = '';
    array.map(function(nv, index) {
        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-info" id="btnCapNhap" data-toggle="modal"
                    data-target="#myModal" onclick="_capNhatNhanVien('${nv.taiKhoan}')">Sửa</button>
                    <button class="btn btn-danger" onclick="_xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
                </td>
            </tr>
        
        `;
        
    });
    getEle('tableDanhSach').innerHTML = content;
};

var setLocalStorage = function() {
    // lưu data xuống local storage
    localStorage.setItem('DSNV', JSON.stringify(dsnv.array));
};

var getLocalStorage = function() {
    // lấy data từ local storage
    dsnv.array = JSON.parse(localStorage.getItem('DSNV'));
    hienThiDanhSachNV(dsnv.array);
}

getLocalStorage();


/**
 * 7.xóa nhân viên
 */
function _xoaNhanVien(taiKhoanNV) {
    dsnv.xoaNhanVien(taiKhoanNV);
    hienThiDanhSachNV(dsnv.array);
    setLocalStorage();
}

/**
 * 8.cập nhật
 */
function _capNhatNhanVien(taiKhoanNV) {
    var nhanVien = dsnv.capNhatNhanVien(taiKhoanNV);

    var btnThemNV = getEle("btnThemNV");

    var btnCapNhat = getEle("btnCapNhat");

    btnThemNV.style.display = 'none';

    if (btnCapNhat.style.display === "none") {
        btnCapNhat.style.display = 'block';
    }

    var tkNV = getEle('tknv');
    var tenNV = getEle('name');
    var email = getEle('email');
    var matKhau = getEle('password');
    var ngayLam = getEle('datepicker');
    var luongCoBan = getEle('luongCB');
    var chucVu = getEle('chucVu');
    var gioLam = getEle('gioLam');

    tkNV.value = nhanVien.taiKhoan;
    tenNV.value = nhanVien.hoTen;
    email.value = nhanVien.email;
    matKhau.value = nhanVien.matKhau;
    ngayLam.value = nhanVien.ngayLam;
    luongCoBan.value = nhanVien.luongCoBan;
    chucVu.value = nhanVien.chucVu;
    gioLam.value = nhanVien.gioLamTrongThang;

    btnCapNhat.addEventListener('click', function() {
        var isValid = true;

    isValid &= validator.kiemTraRong(tkNV.value, 'tbTKNV', '(*)Hãy nhập thông tin tài khoản!!!')
                && validator.kiemTraDoDaiKyTu(tkNV.value,'tbTKNV', '(*)Nhập từ 4 đến 6 ký tự!!!', 4, 6);

    isValid &= validator.kiemTraRong(tenNV.value, 'tbTen', '(*)Hãy nhập họ tên vào!!!')
                && validator.kiemTraChuoi(tenNV.value, 'tbTen', '(*)Hãy nhập chuỗi ký tự vào!!!'); 

    isValid &= validator.kiemTraRong(email.value, 'tbEmail', '(*)Hãy nhập email vào!!!')
                && validator.kiemTraEmail(email.value, 'tbEmail', '(*)Hãy nhập email đúng định dạng!!!');

    isValid &= validator.kiemTraRong(matKhau.value, 'tbMatKhau', '(*)Hãy nhập mật khẩu vào!!!')
                && validator.kiemTraPassWord(matKhau.value, 'tbMatKhau', '(*)Hãy nhập từ 6 đến 10 ký tự: "Bao gồm ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"!!!');

    isValid &= validator.kiemTraRong(ngayLam.value, 'tbNgay', '(*)Hãy nhập ngày làm vào!!!')
                && validator.kiemTraDate(ngayLam.value, 'tbNgay', '(*)Hãy nhập ngày đúng định dạng mm/dd/yyyy');

    isValid &= validator.kiemTraRong(luongCoBan.value, 'tbLuongCB', '(*)Hãy nhập số tiền lương vào!!!')
                && validator.kiemTraLuong(luongCoBan.value,'tbLuongCB', '(*)Hãy nhập từ 1.000.000 đến 20.000.000', 1000000, 20000000);

    isValid &= validator.kiemTraChucVu(chucVu.value, 'tbChucVu', '(*)Hãy chọn chức vụ phù hợp!!!');

    isValid &= validator.kiemTraRong(gioLam.value, 'tbGiolam', '(*)Hãy nhập vào số giờ làm việc!!!')
                && validator.kiemTraGioLam(gioLam.value,'tbGiolam', '(*)Hãy nhập từ 80 giờ đến 200 giờ', 80, 200);

    if(!isValid) return;
        
    nhanVien.taiKhoan = tkNV.value;
    nhanVien.hoTen = tenNV.value;
    nhanVien.email = email.value;
    nhanVien.matKhau = matKhau.value;
    nhanVien.ngayLam = ngayLam.value;
    nhanVien.luongCoBan = luongCoBan.value;
    nhanVien.chucVu = chucVu.value;
    nhanVien.gioLamTrongThang = gioLam.value;
    
    
    setLocalStorage();
    location.reload();
    });
    
};



/**
 * 2.thêm nhân viên mới
 */

getEle('btnThemNV').addEventListener('click', function() {
    //lấy giá trị người dùng nhập vào
    var taiKhoanNV = getEle('tknv').value;
    var tenNV = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCoBan = getEle('luongCB').value;
    var chucVu = getEle('chucVu').value;
    var gioLam = getEle('gioLam').value;

    //kiểm tra validator
    var isValid = true;

    isValid &= validator.kiemTraRong(taiKhoanNV, 'tbTKNV', '(*)Hãy nhập thông tin tài khoản!!!')
                && validator.kiemTraDoDaiKyTu(taiKhoanNV,'tbTKNV', '(*)Nhập từ 4 đến 6 ký tự!!!', 4, 6);

    isValid &= validator.kiemTraRong(tenNV, 'tbTen', '(*)Hãy nhập họ tên vào!!!')
                && validator.kiemTraChuoi(tenNV, 'tbTen', '(*)Hãy nhập chuỗi ký tự vào!!!'); 

    isValid &= validator.kiemTraRong(email, 'tbEmail', '(*)Hãy nhập email vào!!!')
                && validator.kiemTraEmail(email, 'tbEmail', '(*)Hãy nhập email đúng định dạng!!!');

    isValid &= validator.kiemTraRong(matKhau, 'tbMatKhau', '(*)Hãy nhập mật khẩu vào!!!')
                && validator.kiemTraPassWord(matKhau, 'tbMatKhau', '(*)Hãy nhập từ 6 đến 10 ký tự: "Bao gồm ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"!!!');

    isValid &= validator.kiemTraRong(ngayLam, 'tbNgay', '(*)Hãy nhập ngày làm vào!!!')
                && validator.kiemTraDate(ngayLam, 'tbNgay', '(*)Hãy nhập ngày đúng định dạng mm/dd/yyyy');

    isValid &= validator.kiemTraRong(luongCoBan, 'tbLuongCB', '(*)Hãy nhập số tiền lương vào!!!')
                && validator.kiemTraLuong(luongCoBan,'tbLuongCB', '(*)Hãy nhập từ 1.000.000 đến 20.000.000', 1000000, 20000000);

    isValid &= validator.kiemTraChucVu(chucVu, 'tbChucVu', '(*)Hãy chọn chức vụ phù hợp!!!');

    isValid &= validator.kiemTraRong(gioLam, 'tbGiolam', '(*)Hãy nhập vào số giờ làm việc!!!')
                && validator.kiemTraGioLam(gioLam,'tbGiolam', '(*)Hãy nhập từ 80 giờ đến 200 giờ', 80, 200);

    if(!isValid) return;

    //3. khởi tạo đối tượng nhân viên từ lớp đối tượng NhanVien
    var nhanVien = new NhanVien(taiKhoanNV, tenNV, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam,)
    dsnv.themNhanVien(nhanVien);

    hienThiDanhSachNV(dsnv.array);
    setLocalStorage();
});

