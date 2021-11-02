class ApplicationService
  def self.perform(*args, &block)
    new(*args, &block).perform
  end

  private

  class Result
    attr_reader :resource

    def initialize(resource, success)
      @resource = resource
      @success = success
    end

    def success?
      @success
    end

    def then
      if success?
        result = yield(@resource)
        raise TypeError, "block invoked in ApplicationService::Result#then did not return ApplicationService::Result" unless result.is_a?(Result)
        result
      else
        self
      end
    end
  end

  private_constant :Result
end
