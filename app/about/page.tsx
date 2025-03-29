import { PolicyLayout } from '@/components/policy-layout';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | IEEE GU',
  description: 'Learn about IEEE Galgotias University and our mission to promote technology education and innovation.',
};

export default function AboutPage() {
  return (
    <PolicyLayout title="About IEEE Galgotias University">
      <div className="space-y-8 dark:bg-gray-800">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400 ">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            IEEE Galgotias University Student Branch is dedicated to fostering technological innovation and excellence for the benefit of humanity. We aim to inspire students to pursue excellence in their chosen fields and contribute meaningfully to technological advancement through education, collaboration, and practical application of knowledge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">Who We Are</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Founded in 2015, IEEE Galgotias University is a student branch of the world's largest technical professional organization, the Institute of Electrical and Electronics Engineers (IEEE). Our branch operates under the Delhi Section of IEEE Region 10 and serves students across various disciplines of engineering and technology at Galgotias University.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Led by passionate student volunteers and guided by faculty advisors, our branch offers a platform for students to develop technical skills, leadership abilities, and professional networks beyond the classroom.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Technical Events', desc: 'We organize workshops, seminars, coding competitions, hackathons, and technical symposiums like Young Minds that bring together students, academics, and industry professionals to share knowledge and inspire innovation.' },
              { title: 'Skill Development', desc: 'Through hands-on sessions and projects, we help students develop practical skills that complement their academic learning and prepare them for professional challenges.' },
              { title: 'Networking', desc: 'We connect students with professionals and experts through guest lectures, industry visits, and networking sessions, creating valuable opportunities for mentorship and career guidance.' },
              { title: 'Research & Publication', desc: 'We encourage and support students in research activities and help them publish their work through IEEE-affiliated journals and conferences.' }
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 dark:bg-gray-800 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl dark:text-blue-400 font-bold mb-4 text-blue-800 dark:text-blue-400">Our Society Chapters</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            IEEE GU hosts several specialized society chapters that focus on specific fields within technology:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Computer Society:</strong> Focusing on advanced computing, software engineering, and information technology.</li>
            <li><strong>Women in Engineering (WIE):</strong> Supporting the recruitment and retention of women in technical disciplines.</li>
            <li><strong>Industry Applications Society:</strong> Bridging the gap between theoretical knowledge and industrial applications.</li>
            <li><strong>Power & Energy Society:</strong> Concentrating on electrical power and energy engineering challenges.</li>
          </ul>
        </section>
        <section>
  <h2 className="text-2xl font-bold dark:text-blue-400 mb-4 text-blue-800">Leadership Team</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/Aanjey_wkazg5.jpg" 
          alt="Dr. Aanjey Mani Tripathi" 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">Dr. Aanjey Mani Tripathi</h3>
      <p className="text-blue-600 dark:text-blue-400">Branch Counselor</p>
    </div>

    <div className="text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005300/shubhranshu_hfxnd7.png" 
          alt="Shubhranshu Shekhar Dash" 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">Shubhranshu Shekhar Dash</h3>
      <p className="text-blue-600 dark:text-blue-400">Chairperson</p>
    </div>

    <div className="text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/anurag/hkvcjqnjjawcxb5iiekw" 
          alt="anurag" 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">Anurag Kumar Singh</h3>
      <p className="text-blue-600 dark:text-blue-400">Vice-Chairperson</p>
    </div>
  </div>
</section>

        <section className="border-t border-gray-200 dark:border-gray-600 pt-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For inquiries about IEEE Galgotias University, membership, or our events, please email us at ieeegu@galgotiasuniversity.edu.in or visit our office at Room 305, Block C, Galgotias University, Greater Noida, Uttar Pradesh.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}