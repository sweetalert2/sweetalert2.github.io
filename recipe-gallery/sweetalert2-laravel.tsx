import { Nav } from '../src/components'
import { renderRecipe } from '../src/utils'
import { CodeExample } from '../src/components/CodeExample'

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + Laravel example</h1>
      <p>
        Here's the official Laravel integration:{' '}
        <a href="https://github.com/sweetalert2/sweetalert2-laravel">
          https://github.com/sweetalert2/sweetalert2-laravel
        </a>
      </p>
      <p>
        It allow you to use SweetAlert2 in your Laravel application with ease. API options are the same as in the
        original plugin.
      </p>

      <pre style={{ maxWidth: '500px' }}>
        <code>
          <span className="unselectable">$ </span>composer require sweetalert2/laravel
        </code>
      </pre>

      <p>
        Include the SweetAlert2 template in your layout file (usually{' '}
        <strong>resources/views/layouts/app.blade.php</strong>):
      </p>

      <pre style={{ maxWidth: '500px' }}>
        <code>@include('sweetalert2::index')</code>
      </pre>

      <p>
        You can now run <strong>Swal::fire()</strong> anywhere in your Laravel application (controllers, middleware,
        etc.) to show a SweetAlert2 alert:
      </p>

      <CodeExample
        code={`use SweetAlert2\\Laravel\\Swal;

// same options as in Swal.fire()
Swal::fire([
    'title' => 'Laravel + SweetAlert2 = <3',
    'text' => 'This is a simple alert using SweetAlert2',
    'icon' => 'success',
    'confirmButtonText' => 'Cool'
]);

// or with a custom icon
Swal::success([
    'title' => 'Popup with a success icon',
]);
Swal::error([
    'title' => 'Popup with an error icon',
]);
Swal::warning([
    'title' => 'Popup with a warning icon',
]);
Swal::info([
    'title' => 'Popup with an info icon',
]);
Swal::question([
    'title' => 'Popup with a question icon',
]);

// or a toast
Swal::toast([
    'title' => 'Toast',
]);

// or a toast with a custom icon
Swal::toastSuccess([
    'title' => 'Toast with a success icon',
]);
Swal::toastError([
    'title' => 'Toast with an error icon',
]);
Swal::toastWarning([
    'title' => 'Toast with a warning icon',
]);
Swal::toastInfo([
    'title' => 'Toast with an info icon',
]);
Swal::toastQuestion([
    'title' => 'Toast with a question icon',
]);`}
        language="php"
        style={{ maxWidth: '600px' }}
        withoutCodepen
      />

      <p>
        <img
          src="https://github.com/sweetalert2/sweetalert2-laravel/raw/main/sweetalert2-laravel.png"
          style={{ maxWidth: 840 }}
        />
      </p>
    </>
  )
}

renderRecipe(<Recipe />)
