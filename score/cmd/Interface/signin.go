package Interface

import (
	"fmt"
	"net/http"
	middlewares "score/cmd/middleware"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func SigninIterface() {
	InitDB()

	//应用中间件
	R.Use(middlewares.Cors())

	// 处理登录请求
	R.POST("/signin", func(c *gin.Context) {
		// 创建内表用于接收参数
		var userform Userform
		// 创建内表用于存放查询数据库后的数据
		// var useraccount Useraccount

		// 使用PostForm获取请求参数
		userform.Username = c.PostForm("username")
		userform.Password = c.PostForm("password")

		//测试传输数据
		fmt.Println("username:", userform.Username, "  password:", userform.Password)

		//定义mysql语句
		sqlStr := "insert into account(username, password) value (?, ?)"
		// 查询数据库 将数据返回到useraccount
		r, err := Db.Exec(sqlStr, userform.Username, userform.Password)
		if err != nil {
			//没找到数据时返回success：false
			c.JSON(http.StatusOK, gin.H{"success": false, "msg": "注册失败"})
			fmt.Println("插入失败", err)
			fmt.Println("接收到数据，但插入失败")

		} else {
			//找到数据时返回success：true， 由于前端不会判断json的值，所以改为返回值为空，以供前端判断
			// 此处逻辑简单后端其实只要在成功时返回值就行
			c.JSON(http.StatusOK, gin.H{})
			fmt.Println("ok")
			fmt.Println("username:", userform.Username, "password:", userform.Password)

			// 查询插入id 函数好像在使用Db.Exec后必须使用
			id, err := r.LastInsertId()
			if err != nil {
				fmt.Println("LastinsertId failed,err:", err)
			}
			fmt.Println("插入成功last id:", id)
		}
	})
	

}
