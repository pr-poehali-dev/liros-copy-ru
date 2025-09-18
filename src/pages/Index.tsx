import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const services = [
    {
      icon: 'Factory',
      title: 'Промышленное производство',
      description: 'Высокотехнологичные решения для промышленных предприятий',
      features: ['Автоматизация процессов', 'Контроль качества', 'Оптимизация производства']
    },
    {
      icon: 'Cog',
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж сложных инженерных систем',
      features: ['Проектирование', 'Монтаж оборудования', 'Техническое обслуживание']
    },
    {
      icon: 'Settings',
      title: 'Техническое обслуживание',
      description: 'Профессиональное обслуживание промышленного оборудования',
      features: ['Диагностика', 'Ремонт', 'Модернизация']
    },
    {
      icon: 'FileText',
      title: 'Консалтинг',
      description: 'Экспертные консультации по промышленным решениям',
      features: ['Аудит производства', 'Оптимизация процессов', 'Внедрение технологий']
    }
  ];

  const stats = [
    { number: '15+', label: 'Лет опыта' },
    { number: '500+', label: 'Выполненных проектов' },
    { number: '150+', label: 'Довольных клиентов' },
    { number: '24/7', label: 'Техническая поддержка' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Factory" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-secondary">ЛИРОС</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Получить консультацию</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Промышленные решения
              <span className="text-primary block">нового поколения</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Компания ЛИРОС предоставляет комплексные промышленные решения, 
              инженерные системы и техническое обслуживание для предприятий различных отраслей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-scale">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Заказать звонок
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-scale-in">
            <img 
              src="/img/4f4c71e3-dad5-49a3-ae1b-11bac81e14e8.jpg" 
              alt="Промышленное производство" 
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр промышленных решений для эффективного развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании ЛИРОС</h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 15 лет мы являемся надежным партнером в области промышленных решений. 
                Наша компания специализируется на проектировании, производстве и внедрении 
                высокотехнологичного оборудования для различных отраслей промышленности.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">
                    <Icon name="Award" className="w-4 h-4 mr-1" />
                    Качество
                  </Badge>
                  <span>Сертифицированные процессы производства</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">
                    <Icon name="Users" className="w-4 h-4 mr-1" />
                    Команда
                  </Badge>
                  <span>Высококвалифицированные специалисты</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">
                    <Icon name="Zap" className="w-4 h-4 mr-1" />
                    Инновации
                  </Badge>
                  <span>Современные технологии и решения</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/67c381dd-3bb0-4c9d-a65c-84e20234bc2f.jpg" 
                alt="О компании" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Портфолио проектов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных проектов в различных отраслях промышленности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Автоматизация производства', industry: 'Машиностроение', year: '2024' },
              { title: 'Модернизация оборудования', industry: 'Металлургия', year: '2023' },
              { title: 'Внедрение систем контроля', industry: 'Химическая промышленность', year: '2024' },
            ].map((project, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge>{project.year}</Badge>
                  </div>
                  <CardDescription>{project.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    Подробнее
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-gray-600 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и наши специалисты 
                свяжутся с вами в течение рабочего дня.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@liros.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-600">г. Москва, ул. Промышленная, 15</div>
                  </div>
                </div>
              </div>
              
              {/* Interactive Map */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Наше расположение</h3>
                <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b4038d90884dc3dc1a8e40c9e5ff70f9acf4bcd0bfbe0b5a4db9d9c06e57e2&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="border-0"
                    title="Карта офиса ЛИРОС"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-sm">ЛИРОС</div>
                        <div className="text-xs text-gray-600">ул. Промышленная, 15</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Info Cards */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon name="Car" className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Удобная парковка</div>
                          <div className="text-sm text-gray-600">Бесплатная парковка для клиентов</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon name="Train" className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Транспорт</div>
                          <div className="text-sm text-gray-600">5 мин пешком от метро</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Отправить заявку</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для обсуждения деталей проекта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Название компании"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите ваш проект или вопрос"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                    <Icon name="Send" className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="Factory" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">ЛИРОС</h3>
              </div>
              <p className="text-gray-300">
                Промышленные решения и инженерные системы для развития вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Промышленное производство</li>
                <li>Инженерные системы</li>
                <li>Техническое обслуживание</li>
                <li>Консалтинг</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-300">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Сертификаты</li>
                <li>Карьера</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div>+7 (495) 123-45-67</div>
                <div>info@liros.ru</div>
                <div>г. Москва, ул. Промышленная, 15</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ЛИРОС. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;