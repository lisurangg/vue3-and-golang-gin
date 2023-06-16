package Interface

import (
	"fmt"
	"net/http"
	middlewares "score/cmd/middleware"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

// 
type Score struct {
	Username string
	Name string
	Score1 string
	Score2 string
	ScoreAll string
}

func HomeInterface()  {
	InitDB()

	//应用中间件
	R.Use(middlewares.Cors())

	// 处理home请求
	R.POST("/home", func(c *gin.Context) {
		// 创建内表用于接收参数
		var userform Userform
		// 创建内表用于存放查询数据库后的数据
		var score Score

		// 使用PostForm获取请求参数
		userform.Username = c.PostForm("username")
		// userform.Password = c.PostForm("password")

		//测试传输数据
		fmt.Println("username:", userform.Username)

		//定义mysql语句
		sqlStr := "select * from score where username = ?"
		// 查询数据库 将数据返回到useraccount
		err := Db.QueryRow(sqlStr, userform.Username).Scan(&score.Name, &score.Score1, &score.Score2, &score.ScoreAll, &score.Username)
		if err != nil {
			//没找到数据时返回success：false
			c.JSON(http.StatusOK, gin.H{"success": "false", "msg": "未在系统中记录数据，请点击上方记录按钮记录数据"})
			fmt.Println("not", err)
			fmt.Println("接收到数据")

		} else {
			//找到数据时返回success：true，由于前端不会判断json的值，所以改为返回值为空，以供前端判断
			// 此处逻辑简单后端其实只要在成功时返回值就行
			// c.JSON(http.StatusOK, gin.H{})
			c.JSON(http.StatusOK, gin.H{"name":score.Name, "score1":score.Score1, "score2":score.Score2, "scoreAll":score.ScoreAll})
			fmt.Println("ok")
			fmt.Println("username:", userform.Username, "name:",score.Name )
		}
	})
	R.Run(":9999")
}