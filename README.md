# rest-auth
=====

Chạy bằng Postman (GET): http://localhost:8084/rest/hello
> API báo: 
```
	{
	    "timestamp": "2019-01-18T00:40:45.303+0000",
	    "status": 500,
	    "error": "Internal Server Error",
	    "message": "JWT Token is missing",
	    "path": "/rest/hello"
	}
```

Gọi đến (POST): http://localhost:8084/token
> với body:
```
	{
		"userId": 123,
		"userName": "linhgia",
		"role": "admin"
	}
```
  API trả về Token
  
  Gọi lại (GET): http://localhost:8084/rest/hello
  > với header: Authorization: Token token_vừa_trả_về_ở_trên
  => Sẽ có dữ liệu trả về. Ở đây Token giống như Session, để xác nhận quyền truy cập vào API. 
  Nếu ko có token người dùng chưa đăng nhập sẽ ko lấy được dữ liệu từ API
