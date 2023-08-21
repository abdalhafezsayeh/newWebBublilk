import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Index() {

  const router = useRouter()


  useEffect(() => {
      router.push('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div class="min-h-screen bg-black flex flex-col pt-24">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900">
                    404 Page Not Found
                </h1>
            </div>
        </header>
        <main class="flex-grow">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-5 sm:p-6 bg-white shadow rounded-lg">
                    <div class="sm:flex sm:items-center sm:justify-center">
                        <svg class="mx-auto h-24 w-24 text-gray-400 sm:mx-0 sm:h-32 sm:w-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">
                                Oops! We couldn&apos;t find this page.
                            </h3>
                            <p class="mt-2 text-sm leading-5 text-gray-500">
                                The page you&apos;re looking for might have been removed or is temporarily unavailable. Please check the URL and try again.
                            </p>
                            <div class="mt-5 sm:mt-6">
                                <a href="#" className="btn btn-primary">
                                    Go back to home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div class="flex justify-center space-x-6">
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.998 4.554c-.885.388-1.83.652-2.825.77 1.014-.644 1.796-1.66 2.166-2.873-.951.566-2.005.975-3.124 1.194-.896-.957-2.173-1.555-3.584-1.555-2.71 0-4.908 2.198-4.908 4.908 0 .386.044.76.13 1.12-4.08-.204-7.7-2.157-10.126-5.126-.422.718-.664 1.554-.664 2.445 0 1.693.863 3.18 2.17 4.05-.798-.025-1.546-.245-2.203-.61v.06c0 2.365 1.68 4.33 3.908 4.78-.41.11-.844.17-1.29.17-.314 0-.62-.03-.924-.086.63 1.945 2.445 3.36 4.605 3.395-1.685 1.32-3.807 2.105-6.107 2.105-.397 0-.788-.025-1.176-.073 2.18 1.398 4.756 2.21 7.54 2.21 9.044 0 13.998-7.492 13.998-13.997 0-.21 0-.42-.014-.63.962-.696 1.798-1.57 2.458-2.458-2.556zm0 0"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.75 0H4.25C1.897 0 0 1.897 0 4.25v15.5C0 22.103 1.897 24 4.25 24h15.5c2.353 0 4.25-1.897 4.25-4.25V4.25C24 1.897 22.103 0 19.75 0zm-2.77 6.908c.546 0 .992.446.992.991v3.14h-1.955v7.608h-3.29v-7.608h-1.31V7.899h1.31v-.895c0-1.3.795-2.005 1.944-2.005zm2.773 0c-.717 0-1.301.584-1.301 1.301v.895h1.955l-.002 1.907h-1.953v4.649h-1.953v-4.649h-1.31v-1.907h1.31v-.83c0-1.06.61-1.645 1.592-1.645.474 0 .882.035 1.002.051v1.741l-.684.002z"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.087-.74.083-.725.083-.725 1.204.085 1.838 1.236 1.838 1.236 1.07 1.836 2.809 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.312.465-2.38 1.235-3.22-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.005 0c2.295-1.552 3.3-1.23 3.3-1.23.645 1.652.24 2.873.12 3.176.765.84 1.23 1.908 1.23 3.22 0 4.61-2.805 5.622-5.48 5.918.43.372.81 1.102.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.688.825.57C20.565 21.795 24 17.303 24 12c0-6.63-5.37-12-12-12z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Index