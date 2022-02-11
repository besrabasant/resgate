FROM golang:1.17-alpine as base

FROM base as dev

WORKDIR /opt/app/

RUN apk add curl

# Install the air binary so we get live code-reloading when we save files
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# Run the air command in the directory where our code will live
CMD [ "/go/bin/air" ]