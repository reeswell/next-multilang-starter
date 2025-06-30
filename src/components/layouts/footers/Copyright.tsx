import { Icons } from '@/components/Icons'
import Link from 'next/link'

export const Footer = ({
  copyright = ''
}) => {
  return (
    <div className="mt-10 w-full  border-t">
      <div className="flex items-center justify-center py-6">
        <p>{copyright}</p>
        <Link
          href="https://github.com/reeswell/next-multilang-starter"
          target="_blank"
          rel="noreferrer"
        >
          <Icons.gitHub className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
