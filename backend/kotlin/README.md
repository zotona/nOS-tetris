## Building the kotlin contract

You don't need anything other than [Docker](https://www.docker.com/community-edition#/download) and access to `make`. Just run `make` to build the contract avms. It might take a while the first time.
Result AVM contract path: backend/kotlin/target/classes/contracts/Contract.avm

## Import contract to neo
copy Contract.avm to `neo-local/smart-contracts` folder

# at neo-cli
neo> import contract /smart-contracts/Contract.avm 0707 07 True False