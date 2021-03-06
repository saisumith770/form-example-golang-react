package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/saisumith770/form-validation-react-go/structs"

	"log"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	var server *gin.Engine = gin.Default()
	server.Use(CORSMiddleware())
	server.POST("/user/create", func(ctx *gin.Context) {
		var userDetails structs.User
		err := ctx.BindJSON(&userDetails)
		if err != nil {
			log.Fatal("Error:", err)
			ctx.AbortWithStatus(http.StatusBadRequest)
		}
		log.Print(userDetails)
		ctx.JSON(200, "the user has been successfully created")
	})
	server.Run()
}
