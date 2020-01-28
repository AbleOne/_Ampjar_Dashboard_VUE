<template>
  	<div class="dashboard  modal-shown">
		<navigation/>
		<main class="main-content">
			<div class="modal-backdrop">
				<div class="modal">
					<h2 class="text-center mb-6">You’ve synced users using another ESP. Are you sure you don’t want to send your emails using this platform?</h2>
					<div class="flex flex-col md:flex-row justify-end">
						<button class="btn btn-outline md:mr-3 mb-3 md:mb-0">No, I still want to use Ampjar</button>
						<button class="btn btn-primary">Yes, choose ESP</button>
					</div>
				</div>
			</div>
			<div class="container mx-auto py-16 px-5">
				<h1 class="lg:text-center">Add Subscribers</h1>
				<p class="lg:text-center mb-6">You can choose to send your email campaigns using your current Email Service Provider or through Ampjar. Either way we’ll help you build and style your campaigns in minutes.</p>
				<h2>Import Subscribers</h2>
				<div class="flex flex-wrap items-center justify-between">
					<p class="sm:w-9/12 pr-3">If you have connected your preferred email service provider and sync your mailing list into Ampjar.</p>
					<button class="btn btn-primary">Sync list</button>
				</div>
				<hr>
				<h2>Import from file</h2>
				<div class="flex flex-wrap items-center justify-between">
					<p class="sm:w-9/12 pr-3">You can upload an Excel or CSV file to add your subscribers.</p>
					<div class="file-custom mb-3 w-auto">
						<input type="file" class="file-custom-input" id="importFile">
						<label class="file-custom-label" for="customFile">Choose file</label>
					</div>
                    <div class="flex flex-wrap items-center justify-between">
                        <div class="checkbox-custom lg:mb-0 sm:w-9/12 flex pr-3">
                            <input id="import-permission" type="checkbox" checked>
                            <label for="import-permission" class="checkbox-label">
                                By uploading this database I confirm that I have been given full and proper permission to contact this database for marketing purposes.
                            </label>
                        </div>
                        <button class="btn btn-primary">Import list</button>
                    </div>
				</div>
				<hr>
				<h2>Copy and paste</h2>
				<p>Copy and paste your subscribers' information below. Provide their first name, last name, and email address, in that order. Make sure to separate the details of each subscriber with a comma, and place each subscriber on a new line!</p>
				<textarea name="" id="" cols="30" rows="10" class="mb-6">First Name, Last Name, Email Address, First Name, Last Name, Email Address, First Name, Last Name, Email Address, First Name, Last Name, Email Address</textarea>
				<div class="flex flex-wrap items-center justify-between">
                    <div class="checkbox-custom lg:mb-0 sm:w-9/12 flex pr-3">
                        <input id="copypaste-permission" type="checkbox" checked>
                        <label for="copypaste-permission" class="checkbox-label">
                            By uploading this database I confirm that I have been given full and proper permission to contact this database for marketing purposes.
                        </label>
                    </div>
					<button class="btn btn-primary">Add subscribers</button>
				</div>
				<hr>
				<h2>Add a single subscriber</h2>
				<form>
					<div class="flex flex-wrap -mx-3 md:mb-8">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="form-label" for="email-address">Email Address</label>
							<input id="email-address" type="text">
						</div>
						<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
							<label class="form-label" for="first-name">First name</label>
							<input id="first-name" type="text">
						</div>
						<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
							<label class="form-label" for="last-name">Last name</label>
							<input id="last-name" type="text">
						</div>
					</div>
				</form>
				<div class="flex flex-wrap items-center justify-between">
                    <div class="checkbox-custom lg:mb-0 sm:w-9/12 flex pr-3">
                        <input id="add-subscribers-permission" type="checkbox" checked>
                        <label for="add-subscribers-permission" class="checkbox-label">
                            I confirm that I have been given full and proper permission to contact this person for marketing purposes.
                        </label>
                    </div>
                    <button class="btn btn-primary">Add subscriber</button>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import dropdown from '../src/components/dropdown'
import navigation from '../src/components/navigation'

export default { 
	name: `App`,
		components: {
			navigation,
			dropdown
		},
	};
</script>
