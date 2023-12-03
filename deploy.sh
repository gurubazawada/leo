PRIVATEKEY="APrivateKey1zkp4HbNo3qnh4aq9iKkZZG6yKmQHojkiSrPmryKiaVUmDC4"

APPNAME="token_"

cd .. && snarkos developer deploy "${APPNAME}.aleo" --private-key "${PRIVATEKEY}" --query "https://vm.aleo.org/api" --path "./${APPNAME}/build/" --broadcast "https://vm.aleo.org/api/testnet3/transaction/broadcast" --fee 1000000