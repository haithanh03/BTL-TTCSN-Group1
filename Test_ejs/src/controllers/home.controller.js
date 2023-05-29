class HomeController {
    index(req, res) {
      // Xử lý logic và chuẩn bị dữ liệu
      // Ví dụ: Lấy thông tin sản phẩm từ homeCart
  
      // Render view tương ứng
      res.render('Home'); // Render view có tên 'home'
    }
  }
  
  module.exports = HomeController;