"""
Test & Build:

Copy file to neo-local/smart-contracts

neo-cli:
neo> build /smart-contracts/storage.py test 0707 07 True False key b'123'
neo> import contract /smart-contracts/storage.avm 0707 07 True False
"""

from boa.interop.Neo.Runtime import Log, Notify
from boa.interop.Neo.Storage import Get, Put, GetContext

def Main(user_id, score):
    context = GetContext()

    # Store the new value
    Put(context, user_id, score)
    msg = ["written into storage user_id: ", user_id, ", score: ", score]
    Notify(msg)

    return b'done'