import React from 'react'
import LoadingSpinner from './LoadingSpinner'

function ResponseBox(props) {
    return (
        <div>
            <div class="flex justify-between bg-slate-200 text-gray-800 text-left p-1 pl-4">
                <p class="uppercase text-xs tracking-widest font-mono font-semibold">Response</p>
                <div class="flex space-x-2">
                    {props.copied
                        &&
                        <p class={`uppercase text-xs tracking-widest font-mono font-semibold text-green-500 transitions-all ease-in-out duration-300 ${props.copied ? 'opacity-100' : 'opacity-0'}`}>Copied</p>}
                    <svg onClick={props.handleCopy} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    <svg onClick={props.handleRefresh} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>

            </div>
            <div class="border whitespace-pre-wrap border-slate-200 font-mono font-extralight tracking-tighter text-left py-2 px-4">{props.isLoading && <LoadingSpinner />} {!props.isLoading && props.responseText}
            </div>
        </div>
    )
}

export default ResponseBox