build: framework-jar build-classes build-avms

build-classes:
	docker-compose run --rm maven mvn clean install

build-avms:
	# docker-compose run --rm --entrypoint "/bin/sh" neoj scripts/build-avms.sh	
	docker run -it --rm -v $(shell pwd)/target/classes/contracts:/compile/src coz/neoj-compiler Contract.class

test: 
	docker-compose run --rm maven mvn test

framework-jar: 
	docker-compose run --rm neo-devpack-java mvn clean install && \
	cp vendor/neo-devpack-java/target/*.jar ./vendor/org.neo.smartcontract.framework.jar


.PHONY: build build-classes build-avms test framework-jar 
