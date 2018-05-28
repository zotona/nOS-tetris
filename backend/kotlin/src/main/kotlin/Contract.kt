package contracts;

import org.neo.smartcontract.framework.SmartContract
import org.neo.smartcontract.framework.services.neo.Storage

class Contract : SmartContract() {
   fun Main(userId: String?, score: String?) : Object? {

         Storage.put(Storage.currentContext(), userId, score)
         return true as Object?

   }

}
