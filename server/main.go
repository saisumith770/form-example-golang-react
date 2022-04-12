package main

import (
	"github.com/gin-gonic/gin"
	"github.com/saisumith770/form-validation-react-go/structs"

	"fmt"
)

func main() {
	var server *gin.Engine = gin.Default()
	server.POST("/user/create", func(ctx *gin.Context) {
		var userDetails structs.User
		if err := ctx.BindJSON(&userDetails); err != nil {
			ctx.AbortWithStatusJSON(400, "could parse the json")
		}
		fmt.Println(userDetails)
		ctx.JSON(200, "the user has been successfully created")
	})
	server.Run()
}
