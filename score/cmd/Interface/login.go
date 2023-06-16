package Interface

import (
	"database/sql"
	"fmt"
	"net/http"
	middlewares "score/cmd/middleware"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

// 定义一个全局对象db
var Db *sql.DB

// 定义结构体Userform
type Userform struct {
	Username string `form:"username"`
	Password string `form:"password"`
}

// 定义结构体Useraccount
type Useraccount struct {
	Username string `db:"username"`
	Password int    `db:"password"`
}

var R = gin.Default()

// 定义连接数据库函数
func InitDB() (err error) {
	// dns:Data Source Name
	dsn := "root:062511@tcp(127.0.0.1:3306)/score_calculation"
	Db, err = sql.Open("mysql", dsn)
	if err != nil {
		fmt.Printf("dsn err:%v\n", err)
		return
	}
	// 尝试与数据库连接
	err = Db.Ping()
	if err != nil {
		fmt.Printf("连接错误,err:%v\n", err)
		return
	} else {
		fmt.Println("连接数据库成功")
	}
	return err
}

func LoginInterface() {
	// 调用连接数据库函数
	InitDB()

	// 1.创建路由

	//应用中间件
	R.Use(middlewares.Cors())

	// 处理登录请求
	R.POST("/login", func(c *gin.Context) {
		// 创建内表用于接收参数
		var userform Userform
		// 创建内表用于存放查询数据库后的数据
		var useraccount Useraccount

		// 使用PostForm获取请求参数
		userform.Username = c.PostForm("username")
		userform.Password = c.PostForm("password")

		//测试传输数据
		fmt.Println("username:", userform.Username, "  password:", userform.Password)

		//定义mysql语句
		sqlStr := "select * from account where username = ? and password = ?"
		// 查询数据库 将数据返回到useraccount
		err := Db.QueryRow(sqlStr, userform.Username, userform.Password).Scan(&useraccount.Username, &useraccount.Password)
		if err != nil {
			//没找到数据时返回success：false
			c.JSON(http.StatusOK, gin.H{"success": "false", "msg": "用户名或密码错误"})
			fmt.Println("not", err)
			fmt.Println("接收到数据")

		} else {
			//找到数据时返回success：true，由于前端不会判断json的值，所以改为返回值为空，以供前端判断
			// 此处逻辑简单后端其实只要在成功时返回值就行
			c.JSON(http.StatusOK, gin.H{})
			fmt.Println("ok")
			fmt.Println("username:", userform.Username, "password:", userform.Password)
		}
	})

}
