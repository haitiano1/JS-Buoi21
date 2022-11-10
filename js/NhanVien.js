function NhanVien(taiKhoan,hoTen,email, matKhau, ngayLam,luongCB,chucVu, gioLam, tongLuong){
    // thuộc tính
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = tongLuong;
    this.xepLoai = "";

    // phương thức
    this.tongLuong = function(){
        // var chucVu = document.querySelector("#chucvu").value;

        switch(chucVu){
            case "Sếp":
                this.tongLuong = this.luongCB *3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCB *2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCB;
                break;
            default:
                // alert("vui lòng nhập");
        }
    }
    this.xepLoai = function(){

        if (this.gioLam >= 192) {
            this.xepLoai = "xuất sắc"
        }else if (this.gioLam >= 176){
            this.xepLoai = "giỏi"
        }else if (this.gioLam >= 160){
            this.xepLoai = "khá"
        }else if (this.gioLam < 160){
            this.xepLoai = "trung bình"
        }
        // else{
        //     alert("Giờ làm không hợp lệ")
        // }
    }

}