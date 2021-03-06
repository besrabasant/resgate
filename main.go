package main

import (
	res "github.com/jirenius/go-res"
)

func main() {
	s := res.NewService("example")
	s.Handle("model",
		res.Access(res.AccessGranted),
		res.GetModel(func(r res.ModelRequest) {
			r.Model(struct {
				Message string `json:"message"`
			}{"Hello, from Golang!"})
		}),
	)
	s.ListenAndServe("nats://resgate.nats:4222")
}
